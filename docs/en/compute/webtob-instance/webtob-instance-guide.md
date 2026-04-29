## Application Service > WebtoB Instance > User Guide

## Create a WebtoB Instance


To use WebtoB, you must first create an instance.

![image.png](http://static.toastoven.net/prod_webtob_instance/webtob_image1.png)

Click the **Create** button in **Create WebtoB Instance** to go to **Compute > Instance > Create Instance**.


### Image

The image provided by default is CentOS 7.8 with WebtoB5Fix4 (2022.03.22).

![image.png](http://static.toastoven.net/prod_webtob_instance/webtob_image2.png)


### Instance Information

* Availability Zone: Select 'Any Availability Zone'
* Instance Name: The instance name of the server to be created
* Flavor
    * Any type you want can be selected
* Key pair: Create a new PEM key or use an existing key, if you create a new one, download and keep the key.
* Block Storage Type
    * The root volume, SSD is recommended for faster speed.
    * Set 50 GB or higher to avoid root full.

![image.png](http://static.toastoven.net/prod_webtob_instance/webtob_image3.png)


### Network

Select a subnet to attach to your instance.

![image.png](http://static.toastoven.net/prod_webtob_instance/webtob_image4.png)

### Floating IP

For SSH connection, enable the floating IP.

![image.png](http://static.toastoven.net/prod_webtob_instance/webtob_image5.png)

### Security Group

Because SSH access to the instance is required, you must create and use a security group that allows access to the SSH port (22).

![image.png](http://static.toastoven.net/prod_webtob_instance/webtob_image6.png)

![image.png](http://static.toastoven.net/prod_webtob_instance/webtob_image7.png)



### Complete Instance Creation

After entering all the information above, click the **Create Instance** button, and an instance is created as shown below.


![image.png](http://static.toastoven.net/prod_webtob_instance/webtob_image9.png)

WebtoB is installed in `~/apps/webtob`.


## Check the Startup

### Connect to the Instance

After the instance creation is complete, use SSH to access the instance.
The instance must have a floating IP associated and TCP port 22 (SSH) must be allowed in the security group.

![image.png](http://static.toastoven.net/prod_webtob_instance/webtob_image10.png)

Connect to the instance using an SSH client and the set key pair. For a detailed guide on SSH connection, refer to [SSH Connection Guide](https://docs.toast.com/ko/Compute/Instance/ko/overview/#linux).

### Compile the Configuration File

Compile the configuration file using the wscfl command.

```
wscfl -i http.m
```

### Start WebtoB

Start WebtoB using wsboot.

```
wsboot
```

You can use wsadmin to view or control the status.
