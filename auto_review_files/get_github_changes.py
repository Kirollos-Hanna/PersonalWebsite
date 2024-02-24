import os
import re
import requests
from github import Github

github_token = os.getenv("GITHUB_TOKEN")
github_client = Github(github_token)
repo = github_client.get_repo(os.getenv("GITHUB_REPOSITORY"))
pr = repo.get_pull(int(os.getenv("PR_NUMBER")))
changes = requests.get(
    pr.url,
    timeout=30,
    headers={"Authorization": "Bearer " + github_token,
            "Accept": "application/vnd.github.v3.diff"},
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

print(prompt)
