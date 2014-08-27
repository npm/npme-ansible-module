var Lab = require('lab'),
  lab = exports.lab = Lab.script(),
  Ansible = require('../lib/ansible');

lab.experiment('Ansible', function() {

  lab.experiment('run', function() {
    lab.it('executes ansible command with appropriate working directory', function(done) {
      var ansible = new Ansible({
        util: {
          exec: function(command, opts, cb) {
            Lab.expect(opts.cwd).to.match(/npme-ansible\/ansible/);
            done();
          }
        }
      });

      ansible.install(function() {})
    });
  });

});
