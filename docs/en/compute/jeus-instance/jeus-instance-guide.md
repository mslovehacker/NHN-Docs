## Application Service > JEUS Instance > User Guide

## Create a JEUS Instance

To use JEUS, you must first create an instance.

![image.png](http://static.toastoven.net/prod_jeus_instance/jeus_image1.png)

Click the **Create** button in **Create JEUS Instance** to go to **Compute > Instance > Create Instance**.


### Image

The images provided by default include CentOS 7.8 with JEUS8Fix1 (Domain Administrator Server 2022.03.22) and CentOS 7.8 with JEUS8Fix1 (Managed Server 2022.03.22). To install Domain Administrator Server, use CentOS 7.8 with JEUS8Fix1 (Domain Administrator Server 2022.03.22) image. To install Managed Server, use the CentOS 7.8 with JEUS8Fix1 (Managed Server 2022.03.22) image.

![image.png](http://static.toastoven.net/prod_jeus_instance/jeus_image2.png)


### Instance Information

* Availability Zone: Select 'Any Availability Zone'
* Instance Name: The instance name of the server to be created
* Flavor
    * Any type you want can be selected
* Key pair: Create a new PEM key or use an existing key, if you create a new one, download and keep the key.
* Block Storage Type
    * The root volume, SSD is recommended for faster speed.
    * Set 50 GB or higher to avoid root full.

![image.png](http://static.toastoven.net/prod_jeus_instance/jeus_image3.png)


### Network

![image.png](http://static.toastoven.net/prod_jeus_instance/jeus_image4.png)

### Floating IP

For SSH connection, enable the floating IP.

![image.png](http://static.toastoven.net/prod_jeus_instance/jeus_image5.png)

### Security Group

Because SSH access to the instance is required, you must create and use a security group that allows access to the SSH port (22).

![image.png](http://static.toastoven.net/prod_jeus_instance/jeus_image6.png)

![image.png](http://static.toastoven.net/prod_jeus_instance/jeus_image7.png)



### Complete Instance Creation

After entering all the information above, click the **Create Instance** button, and an instance is created as shown below.


![image.png](http://static.toastoven.net/prod_jeus_instance/jeus_image9.png)

JEUS is installed in `~/apps/jeus8`.

The following properties are set during installation.

| Property | Default value |
| --- | --- |
| Domain name | jeus_domain |
| WebAdmin port | 9736 |
| Admin server name | adminServer |
| Admin user ID | administrator |
| Admin user password | jeusadmin |
| Node manager | java |


## Check the Startup

To configure or control JEUS, you must start the node manager and then control it through WebAdmin or jeusadmin.

### Connect to the Instance

After the instance creation is complete, use SSH to access the instance.
The instance must have a floating IP associated and TCP port 22 (SSH) must be allowed in the security group.

![image.png](http://static.toastoven.net/prod_jeus_instance/jeus_image10.png)

Connect to the instance using an SSH client and the set key pair.
For a detailed guide on SSH connection, refer to [SSH Connection Guide](https://docs.toast.com/ko/Compute/Instance/ko/overview/#linux).

### Start the Node Manager

Connect to the shell and run the node manager with the startNodeManager command.
Since the node managers need to communicate with each other, add an allow rule for the default port 7730 to the security group.

### Start JEUS

To run Domain Administrator Server, use the startDomainAdminServer command.

```
startDomainAdminServer -uadministrator -pjeusadmin
```

### JEUS WebAdmin

Run WebAdmin as follows:

1. Set a floating IP on the instance where DAS is installed.
2. Add an allow rule for port 9736 to that instance's security group.
3. If you connect to in http://{floatingIP}:9736/webadmin in a web browser, you can see the WebAdmin screen.

