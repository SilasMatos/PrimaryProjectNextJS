import subprocess

def automaticCommit():
    # Fetch changes from the remote repository




    subprocess.run(["git", "add", "."])

    commit_message = "Alteracao na section 2asdas2"
    subprocess.run(["git", "commit", "-m", commit_message])

    subprocess.run(["git", "push", "origin", "master"])

    print("Commit realizado com sucesso!!")

if __name__ == "__main__":
    automaticCommit()
