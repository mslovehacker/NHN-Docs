NAT instance is an instance that allows you to access internet over a specific IP address band in the private network instance.
This feature is available only in the Pyeongchon region, Korea.

### Key Features
* The instance of a private network not connect with an internet gateway can access the internet via the NAT instance.
* Accesses the Internet by changing the floating IP of the NAT instance to source IP.
* The packets delivered to the NAT instance are delivered according to the routing setting of the routing table connected to the subnet of NAT instance.
* Do not add a route setting that specifies the NAT instance as a gateway in the routing table connected to the subnet of the NAT instance.
* The instance of a private network cannot receive the inbound traffic coming from the internet.
* Specifies IP address bandwidth of destination to allow Internet access through the NAT instance.
* Allows access to another instance by accessing the NAT instance.
* Sets security group.
* Sets network ACL.
* Redundancy not supported.
* The option of checking network source/target must be disabled in the Network Interface settings for the NAT instance to work.
* If a private image is created with NAT instance, the function might not work normally.

> [Note] Difference with NAT gateway
>
> | Classification | NAT gateway | NAT instance |
> |--|--|--|
> |Availability| Redundancy supported | Redundancy not supported |
> |Maintenance|Maintained by NHN Cloud| Directly maintained by users|
> |Security group|Not settable| Settable|Amount
> |Network ACL| Settable | Settable|
> |SSH|Unavailable| Available|


### How to access NAT instance
This is accessed in the same way as Linux instance. [How to access Linux instance](https://docs.toast.com/en/Compute/Instance/en/overview/#how-to-access-linux-instances)
