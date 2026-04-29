## Create a MariaDB Instance
To use MariaDB, you must first create an instance.
![image1](http://static.toastoven.net/prod_mariadb_instance/image1.jpg)
Click the **Create** button in **Create MariaDB Instance** to go to **Compute > Instance > Create Instance**.

![image2](http://static.toastoven.net/prod_mariadb_instance/image2.jpg)
Choose a MariaDB image and complete additional setup to create an instance.

For more information on instance creation, see [Instance Overview](https://docs.toast.com/en/Compute/Instance/en/overview/).

After the instance creation is complete, use SSH to access the instance.
The instance must have an associated floating IP and TCP port 22 (SSH) must be allowed in the security group.

![image3](http://static.toastoven.net/prod_mariadb_instance/image3.jpg)
Connect to the instance using an SSH client and the configured key pair.
For a detailed guide on SSH connection, refer to [SSH Connection Guide](https://docs.toast.com/en/Compute/Instance/en/overview/#how-to-access-linux-instances).


## How to Start/Stop MariaDB

``` sh
# Start the MariaDB service
shell> sudo systemctl start mariadb.service

# Stop the MariaDB service
shell> sudo systemctl stop mariadb.service

# Restart the MariaDB service
shell> sudo systemctl restart mariadb.service
```

## Connect to MariaDB

After creating an instance, initially connect to MariaDB as follows.

``` sh
shell> mysql -u root
```

After changing the password, connect to MySQL as follows.

``` sh
shell> mysql -u root -p
Enter password:
```

## Initial Setup After Creating a MariaDB Instance

### 1\. Set the Password

After initial installation, the MariaDB root account password is not set. Therefore, you must set a password after installation.

```
SET PASSWORD [FOR user] = password_option

MariaDB> SET PASSWORD = PASSWORD('password');
```

### 2\. Change the Port

After initial installation, the port is 3306, which is MariaDB's default port. For security reasons, it is recommended to change the port.

#### 1) Modify the `/etc/my.cnf.d/server.cnf` file

Open the `/etc/my.cnf.d/server.cnf` file and enter the port address to change under [mariadb] as follows.

```
shell> sudo vi /etc/my.cnf.d/server.cnf
```

```
[mariadb]
port=[port address to change]
```

#### 2) Restart the instance
Restart the instance for the port change to take effect.
```
sudo systemctl restart mariadb.service
```