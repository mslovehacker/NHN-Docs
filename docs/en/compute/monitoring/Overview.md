The infrastructure service provides monitoring for instances created by a user.  
You can find hardware resource usage volume of an instance or set a threshold to receive alarms for specific conditions via email or SMS. 

TOAST Monitoring System is configured as below.

### Configuration of Monitoring System 

![[모니터링 시스템 구성]](http://static.toastoven.net/toastcloud/static/common/img/cms_img/monitoring/img_1.jpg)

The monitoring system is a scaled system on the back of Ceilometer of OpenStack.  
As information on resource use of instances created by a user comes from Hypervisor, there is no need to install a monitoring program. To check monitoring items with specific purposes (e.g. whether server has been down), a monitoring agent is required at a server. 
