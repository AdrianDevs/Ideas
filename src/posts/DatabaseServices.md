<h1>Database Services</h1>

This document describe how to run database instance locally and remotely

<h2>Table of Content</h2>

[TOC]

# General

## Homebrew

List local running data services on homebrew

```bash
$ brew services list
```

Start a service

```bash
$ brew service start <service-name>
```

Stop a service

```bash
$ brew service stop <service-name>
```



# MongoDB

Taken from https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

## Local

### Starting and Stopping

To run MongoDB (i.e. the [`mongod`](https://docs.mongodb.com/manual/reference/program/mongod/#mongodb-binary-bin.mongod) process) **as a macOS service**, run:

```sh
$ brew services start mongodb-community@5.0
```

To stop a [`mongod`](https://docs.mongodb.com/manual/reference/program/mongod/#mongodb-binary-bin.mongod) running as a macOS service, use the following command as needed:

```sh
$ brew services stop mongodb-community@5.0
```

To run MongoDB (i.e. the [`mongod`](https://docs.mongodb.com/manual/reference/program/mongod/#mongodb-binary-bin.mongod) process) **manually as a background process**, run:

- For macOS running Intel processors:

  ```sh
  $ mongod --config /usr/local/etc/mongod.conf --fork
  ```

- For macOS running on [Apple M1 processors](https://support.apple.com/en-us/HT211814):

  ```sh
  $ mongod --config /opt/homebrew/etc/mongod.conf --fork
  ```

To stop a [`mongod`](https://docs.mongodb.com/manual/reference/program/mongod/#mongodb-binary-bin.mongod) running as a background process, connect to the [`mongod`](https://docs.mongodb.com/manual/reference/program/mongod/#mongodb-binary-bin.mongod) using [mongosh](https://docs.mongodb.com/mongodb-shell/), and issue the [`shutdown`](https://docs.mongodb.com/manual/reference/command/shutdown/#mongodb-dbcommand-dbcmd.shutdown) command as needed.

To verify that MongoDB is running, perform one of the following:

- If you started MongoDB **as a macOS service**:

  ```
  brew services list
  ```

You should see the service `mongodb-community` listed as `started`.

If you started MongoDB **manually as a background process**:

```
ps aux | grep -v grep | grep mongod
```

You should see your `mongod` process in the output.

You can also view the log file to see the current status of your `mongod` process: `/usr/local/var/log/mongodb/mongo.log`.

# MySQL

## Local

Start MySQL server and also cause MySQL server to automatically start on login

```bash
$ brew services start mysql
```

Stop MySQL server and also stop it restarting on login

```bash
$ brew services stop mysql
```

Start MySQL and will keep it running until the computer is shut down

```bash
$ mysql.server start
```

Stop MySQL

```bash
$ mysql.server stop
```

Connect to MySQL server

```bash
$ mysql -u root -p
```

## AWS

**General MySQL Connection**

- **Endpoint/Host:** database-1.cnckdfvb0ugd.ap-southeast-2.rds.amazonaws.com
- **Port:** 3306
- **DB Instance identifier:** database-1
- **Master username:** admin
- **Master password:** dataB$s3

**SSH/SSL secure connect**

- **Host:** ec2-3-106-113-62.ap-southeast-2.compute.amazonaws.com
- **Port:** 22
- **Username:** ubuntu
- **Use SSL key pair**

