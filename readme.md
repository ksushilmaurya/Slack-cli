# Slack Cli 

Slack cli is a command line interface tool which can be used to consume slack apis.



## Steps to install the cli.

1. clone the code
2. npm install
3. run _npm link_ to run cli globally
4. hit the _slack-cli_ command in terminal to access the cli



## Calling Slack APIs

To call slack api you need to have slack api key. To create a slack api key visit - https://api.slack.com/. Remember to set _users:read_ scope for the token.

#### Below are the 4 commands currently supporting by cli, we can extend it as per our need.

> set-key - This command is used to set the api key for slack which is created by above steps. 
    complete command is - "slack-cli set-key" or "slack-cli sk"

> get-key - This command is used to get the current which is set. 
    complete command is - "slack-cli get-key" or "slack-cli gk"

> delete-key - This command is used to delete the current api key. 
    complete command is - "slack-cli delete-key" or "slack-cli dk"

> get-users - This command is used to get all users in a workspace.
    complete command is - "slack-cli get-users" or "slack-cli gk"

