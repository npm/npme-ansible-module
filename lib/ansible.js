// run the npme ansible role bootstrapping:
// nginx, couchdb, ndm, npm, etc.
var _ = require('lodash'),
  path = require('path'),
  Util = require('./util');

function Ansible(opts) {
  _.extend(this, {
    owner: 'ubuntu',
    group: 'ubuntu',
    logger: require('./logger'),
    util: new Util(),
    ansiblePrefix: 'ansible-playbook ./install-npme-play.yml -i inventory'
  }, opts)
}

Ansible.prototype.install = function(cb) {
  var _this = this;

  this.logger.success('Installing OS dependencies with Ansible:')

  this.util.exec(_this.ansiblePrefix + ' --extra-vars="install=true npme_owner=' + _this.owner + ' npme_group=' + _this.group + '"', {
    cwd: path.resolve(__dirname, '../ansible')
  }, function() {
    _this.logger.success('install complete!');
    cb();
  });
};

Ansible.prototype.configure = function(binaryDirectory, cb) {
  var _this = this;

  this.logger.success('Configuring npmeE services:')

  this.util.exec(_this.ansiblePrefix + ' --extra-vars="configure=true binary_directory=' + binaryDirectory + ' npme_owner=' + _this.owner + ' npme_group=' + _this.group + '"', {
    cwd: path.resolve(__dirname, '../ansible')
  }, function() {
    _this.logger.success('configuration complete!');
    cb();
  });
};

module.exports = Ansible;
