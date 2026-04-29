## Create a CUBRID Instance

To use CUBRID, you must first create an instance.

![cubrid_instance_image_1.jpg](http://static.toastoven.net/prod_cubrid_instance/cubrid_instance_image_1.jpg)

Click the **Create** button in **Create CUBRID Instance** to go to **Compute > Instance > Create Instance**.

The following two types of CUBRID version are provided.

![cubrid_instance_image_2.jpg](http://static.toastoven.net/prod_cubrid_instance/cubrid_instance_image_2.jpg)

* CUBRID 10.2.4
    * CUBRID-10.2.4.8884-d6808c1-Linux.x86\_64.rpm
* CUBRID 11.0.2
    * CUBRID-11.0.2.0291-a507059-Linux.x86\_64.rpm

Select a CUBRID image and complete additional setup to create an instance. For more information on instance creation, see [Instance Overview](http://docs.toast.com/en/Compute/Instance/en/overview/).

After the instance creation is complete, use SSH to access the instance.
The instance must have an associated floating IP and TCP port 22 (SSH) must be allowed in the security group.

![cubrid_instance_image_3.jpg](http://static.toastoven.net/prod_cubrid_instance/cubrid_instance_image_3.jpg)

Connect to the instance using an SSH client and the configured key pair.
For a detailed guide on SSH connection, refer to [SSH Connection Guide](https://docs.toast.com/en/Compute/Instance/en/overview/#how-to-access-linux-instances).

## How to Start/Stop the CUBRID service

You can start or stop the CUBRID service as follows by logging in with the “cubrid” Linux account.
```
# Start the CUBRID service/server
shell> sudo su - cubrid
shell> cubrid service start 
shell> cubrid server start demodb

# Stop the CUBRID service/server
shell> sudo su - cubrid
shell> cubrid server stop demodb
shell> cubrid service stop 

# Restart the CUBRID service/server
shell> sudo su - cubrid
shell> cubrid server restart demodb
shell> cubrid service restart 

# Start/stop/restart the CUBRID broker
shell> sudo su - cubrid
shell> cubrid broker start
shell> cubrid broker stop
shell> cubrid broker restart
```

## Connect to CUBRID

After creating an instance, initially connect as follows.
```
shell> sudo su - cubrid
shell> csql -u dba demodb@localhost
```

## Initial Setup After Creating a CUBRID Instance

### 1\. Set the Password

After initial installation, the CUBRID dba account password is not set. Therefore, you must set a password after installation.
```
shell> csql -u dba -c "ALTER USER dba PASSWORD 'new_password'" demodb@localhost
```

### 2\. Change the Broker Port

The broker port for **query_editor** defaults to **30000**, and the broker port for **broker1** defaults to **33000**.
For security reasons, it is recommended to change the port.

##### 1) Modify the broker file

Open the following file and enter the port address to change as shown below.
```
shell> vi /opt/cubrid/conf/cubrid_broker.conf

[%query_editor]
BROKER_PORT             =[port address to change]

[%BROKER1]
BROKER_PORT             =[port address to change]
```

##### 2) Restart the broker

Restart the broker for the port change to take effect.
```
shell> cubrid broker restart
```

### 3\. Change the Manager Server Port

The manager server port defaults to **8001**.
For security reasons, it is recommended to change the port.

##### 1)  Modify the cm.conf file

Open the following file and enter the port address to change as shown below.
```
shell> vi /opt/cubrid/conf/cm.conf

cm_port =[port address to change]
```

##### 2) Restart the manager server

Restart the manager for the port change to take effect.
```
shell> cubrid manager stop
shell> cubrid manager start
```

## CUBRID Directory Description

The CUBRID directory and file descriptions are as follows.

| Name | Description |
| --- | --- |
| database.txt | CUBRID database location information file path - /opt/cubrid/databases |
| CONF PATH | CUBRID server, broker, manager environment variable file path - /opt/cubrid/conf |
| LOG PATH | CUBRID process log file path - /opt/cubrid/log |
| SQL\_LOG | CUBRID SQL Query file path /opt/cubrid/log/broker/sql\_log |
| ERROR\_LOG | CUBRID ERROR SQL Query file path - /opt/cubrid/log/broker/error\_log |
| SLOW\_LOG | CUBRID Slow Query file path - /opt/cubrid/log/broker/sql\_log |

### cubrid.conf Description

A server configuration file that allows you to configure the memory of the database you want to operate, the number of threads according to the number of concurrent users, and the communication port between the broker and the server.

| Name | Description |
| --- | --- |
| service  | A parameter to register processes that start automatically when the CUBRID service starts.<br>By default, server, broker, and manager processes are registered. |
| cubrid\_port\_id | The port used by the master process. |
| max\_clients | The maximum number of concurrently connected clients per database server process. |
| data\_buffer\_size | A parameter to set the size of the data buffer that the database server caches in memory.<br>It is recommended to set the required memory size to a value within 2/3 of the system memory. |

### broker.conf Description

A broker configuration file that allows you to set the port used by the broker you want to operate, the number of application servers (CAS), SQL LOG, etc.

| Name | Description |
| --- | --- |
| BROKER\_PORT | The port used by the broker. The port seen by the actual driver such as JDBC is the port of the broker. |
| MAX\_NUM\_APPL\_SERVER | A parameter to set the maximum number of CASs that can be connected to the broker at the same time. |
| MIN\_NUM\_APPL\_SERVER | A parameter to set the minimum number of CAS processes waiting by default even if there is no connection request to the broker. |
| LOG\_DIR | A parameter that specifies the directory where SQL logs are stored. |
| ERROR\_LOG\_DIR | A parameter that specifies the directory where error logs for the broker are stored. |

### cm.conf Description

A CUBRID manager configuration file that allows you to set the port used by the manager server process you want to operate, the monitoring collection cycle, etc.

| Name | Description |
| --- | --- |
| cm\_port | The port used by the manager server process. |
| cm\_process\_monitor\_interval | A cycle for monitoring information collection. |
| support\_mon\_statistic | A parameter to set whether to use cumulative monitoring. |
| server\_long\_query\_time | A parameter that specifies the threshold (in seconds) for a late query when the slow\_query item among the server's diagnostic items is set. |

