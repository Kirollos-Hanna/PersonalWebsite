import os
import litellm
import requests
from github import Github

github_token = os.getenv("GITHUB_TOKEN")
github_client = Github(github_token)
github_repo_name = os.getenv("GITHUB_REPOSITORY")
repo = github_client.get_repo(github_repo_name)
repo_owner = os.getenv("REPO_OWNER")
pr_number = int(os.getenv("PR_NUMBER"))
pr = repo.get_pull(pr_number)

headers = {
    "Authorization": "Bearer " + github_token,
    "Accept": "application/vnd.github.v3+json"
}
changes = requests.get(
    pr.url,
    timeout=30,
    headers=headers,
).text

title=pr.title
body=pr.body

# Prompt for LLM
prompt = f'''As a tech reviewer, please provide an in-depth review of the
following pull request git diff data. Your task is to carefully analyze the title, body, and
changes made in the pull request and identify any problems that need addressing including
security issues. Please provide clear descriptions of each problem and offer constructive
suggestions for how to address them. Additionally, please consider ways to optimize the
changes made in the pull request. You should focus on providing feedback that will help
improve the quality of the codebase while also remaining concise and clear in your
explanations. Please note that unnecessary explanations or summaries should be avoided
as they may delay the review process. Your feedback should be provided in a timely
manner, using language that is easy to understand and follow.

Here are the title, body and changes for this pull request:

Title: {title}

Body: {body}

Changes:
```
{changes}
```
    '''

print("Sending prompt to llm")
response = litellm.completion(
    model="ollama/mistral",
    messages=[{"content": prompt}],
    base_url="http://127.0.0.1:5000/cdgxhqjxaw8lov",
    stream=False,
    timeout=30
)
print("RESPONSE: ", response)
pr_comment_payload = {
    "body": response.choices[0].message["content"]
}
url = f"https://api.github.com/repos/{repo_owner}/{github_repo_name}/issues/{pr_number}/comments"

# Make the POST request to add the comment
response = requests.post(url, json=pr_comment_payload, headers=headers)

# Check the response
if response.status_code == 201:
    print("Comment posted successfully.")
else:
    print(f"Failed to post comment. Status code: {response.status_code}, Response: {response.text}")