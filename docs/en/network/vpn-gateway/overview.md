This service provides the capability to establish an encrypted network connection between a VPC and a customer's on-premises network.


<a id="1"></a>
## Concepts

* Local gateway: A resource allocated to VPN tunnel configuration in NHN Cloud.
* Remote gateway: A resource allocated to VPN tunnel configuration on the on-premises side.
* VPN tunnel: An encrypted link that is configured between a remote gateway and a local gateway.


<a id="2"></a>
## Main Features

* Enables an encrypted network connection between a VPC and a customer’s on-premises network.
* The bandwidth (guaranteed on an outbound basis) can be selected among 20M, 50M, 100M, and 1G.
* The encryption algorithm can be selected among AES192 and AES256.
* The integrity algorithm can be selected among MD5, SHA1 and SHA256.
* Network ACLs can be applied.
* This service is currently only available in the Korea (Pangyo) and Korea (Pyeongchon) regions, and will be supported by other regions gradually.


<a id="3"></a>
## Restrictions

### Common
* IPv6 traffic is not supported for VPN connections. Only IPv4 traffic is supported.
* When connecting your VPC to an on-premises network, you must use address ranges with no overlapping network addresses.
* You can create one VPN gateway for each VPC.
* Each VPN gateway can have a maximum of 10 connections.
* In a VPC connected with VPN, it is not supported to access other networks using peering or access other networks or services through other gateways.

### v1
* You can create a VPN Gateway per VPC and set the bandwidth to use. Every VPN connection belonging to a single VPN Gateway uses the same bandwidth. For example, if you create the first VPN connection at 20Mbps, every VPN connection you create in the VPC will use 20Mbps of bandwidth. If you want to use a different bandwidth, you can create it by specifying the bandwidth you want (choose from 20M, 50M, 100M, and 1G) when creating the first VPN connection in another VPC.

### v2 
* You can create a VPN Gateway per VPC and set the bandwidth to use. Every VPN connection belonging to a single VPN Gateway shares the bandwidth set on the VPN Gateway.