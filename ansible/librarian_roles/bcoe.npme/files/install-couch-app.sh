cd ./node_modules/@npm/npm-registry-couchapp

# wait for CouchDB to be online before we put the documents.
# note that username and password on CouchDB are both admin.
until $(curl --output /dev/null --silent --head --fail http://localhost:5984/); do
    printf '.'
    sleep 2
done

curl -XPUT http://admin:admin@localhost:5984/registry
npm start --@npm/npm-registry-couchapp:couch=http://admin:admin@localhost:5984/registry
npm run load --@npm/npm-registry-couchapp:couch=http://admin:admin@localhost:5984/registry
npm run copy --@npm/npm-registry-couchapp:couch=http://admin:admin@localhost:5984/registry
