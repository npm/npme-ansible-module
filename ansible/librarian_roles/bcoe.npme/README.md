# npmE Ansible

npmE Ansible installs OS-specific dependencies for npm Enteprise:

* Nginx.
* CouchDB.
* Redis.
* Node.js.

# Usage

_npmE Ansible_ uses the Ansible deployment tool to install the dependencies for npmE on a fresh vm.

4. Create a new directory to use for your Ansible deployments.
5. Copy the example `deploy.yml`, `Ansiblefile`, `ansible.cfg`, and `inventory` to this directory.
6. Run: `ansible-librarian install` to install Ansible dependencies.
7. Create a blank Ubuntu image.
8. Update `inventory` to point to the blank Ubuntu image.
9. Run: `ansible-playbook ./deploy.yml -i inventory`.

# Passwordless sudo

Ansible expects to be able to run with passwordless sudo.

That's all there is to it! patches welcome.
