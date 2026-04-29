This guide describes how to use the VPN Gateway (Site-to-Site VPN) service from the console.


<a id="1"></a>
## Create a VPN Gateway

* Name: Enter the name of the VPN gateway to be created.
* VPC: Select the VPC in which to create the VPN gateway.
* Subnet: Select the subnet in which to create the VPN gateway.
* Description: Enter the required description.
* The network interface information of the created VPN gateway can also be found in the Network Interface menu.
* You can create one VPN gateway for each VPC.


<a id="2"></a>
## Modify a VPN Gateway

* You can modify the name and description.


<a id="3"></a>
## Delete a VPN Gateway

* You can delete the selected gateway.
* To delete a gateway, there must be no attached VPN connections.


<a id="4"></a>
## Create a VPN Connection

### Common
* You can create a VPN connection by selecting the tunnel options.
* It may take a few minutes to complete the creation of the VPN connection.
* When the creation is completed, the status indicator changes to `ACTIVE`.
* If there are VPN connections pending for deletion or creation, the tasks must be completed before any other VPN connections can be created.
* The range used for the VPN connection must not overlap in local and remote networks. It must not overlap with the subnet' range as well as the VPC's range.
* The local range used for the VPN connection must be /29 or less, and since we use the four addresses of each range internally, the addresses cannot be used. For example, if you use /29, the following four addresses are unavailable: x.x.x.4, x.x.x.5, x.x.x.6, and x.x.x.7. From /30, you cannot use it as the address itself that must be allocated by the internal system is insufficient.
* The IP allocated to the VPN Gateway cannot include the last four addresses of the subnet.
* In the Routing menu, you must create a route so that the peer range is routed to the VPN gateway.
* Each VPN gateway can have a maximum of 10 VPN connections.
* When connecting your VPC to an on-premises network, you must use address ranges with no overlapping network addresses.
* Peer range can be used redundantly in other VPCs.

### v1
* For the peer gateway address, you cannot use the same address in duplicate.
* The local range cannot be used in duplicate within the same VPC.
* If a VPN connection pending for deletion or creation is not completed, please contact the Customer Center.
* The remote ranges are fixed on the same VPN Gateway, and only multiple local ranges can be added.
* Since the local gateway address is not displayed on the console, you must connect the connection from the local side to the remote side.

### v2
* A user arbitrarily can delete the VPN connection pending deletion or creation. At this time, even if it is deleted from the console, it takes time for the actual deletion. And if you try to create a new VPN connection immediately, it may fail. Please wait a few minutes before trying to create a new VPN connection.
* N:N connections are possible even in the same VPN Gateway between multiple local ranges and multiple remote ranges (all ranges in all connections must not overlap with each other).
* Local gateway addresses are displayed on the console, and you can connect from local to remote or remote to local without any direction restrictions.
* Between Korea (Pyeongchon) region and Korea (Pangyo) region, you can also use a VPN to connect (peer gateway devices in each region must be selected from Fortinet).
* By connecting a VPC from another project through Transit Hub and adding a VPN connection to the bandwidth of the connected VPC, VPN communication is possible through the VPC where the VPN Gateway is created in the VPC from the other project.  


<a id="5"></a>
### VPN Tunnel Options
* Local Range: IPv4 CIDR range on the NHN Cloud side that is allowed for communication through VPN tunnel
    * The range of the selected subnet is entered.
* Peer Range: IPv4 CIDR range on the customer gateway (on-premises) side that is allowed for communication through VPN tunnel.
* Peer Gateway Address: Public IP address of the customer-side gateway
* IKE1 Encryption/Integrity Algorithms: Encryption and integrity algorithms allowed for the VPN tunnel for phase 1 IKE negotiation
    * (Choose one among aes192, aes256)-(Choose one among md5, sha1, sha256)
* IKE1 Authentication Lifetime: Lifetime of phase 1 IKE negotiation (in seconds).
    * You can specify a number between 900 and 28,800.
* Phase 1 Diffie-Hellman (DH) Group: DH group number allowed for the VPN tunnel in the phase 1 of IKE negotiation.
    * Choose one among 1, 2, 5, 14, 15, 16, 17, 18, 19, 20, 21, 27, 28
* IKE2 Encryption/Integrity Algorithms: Encryption and integrity algorithms allowed for the VPN tunnel for phase 2 IKE negotiation
    * (Choose one among aes192, aes256)-(Choose one among md5, sha1, sha256)
* IKE2 Authentication Lifetime: Lifetime of phase 2 IKE negotiation (in seconds).
    * You can specify a number between 900 and 28,800.
* IKE2 Diffie-Hellman (DH) Group: DH group number allowed for the VPN tunnel in the phase 2 of IKE negotiation.
    * Choose one among 1, 2, 5, 14, 15, 16, 17, 18, 19, 20, 21, 27, 28
* Bandwidth: Determine the bandwidth to use for the connection.
    * Choose 1 among 20M, 50M, 100M, and 1G
    * Indicates the outbound bandwidth.
* Pre-Shared Key: A pre-shared key (PSK) establishes an initial Internet Key Exchange (IKE) secure connection between the target gateway and the customer gateway.
    * You can use English letters, numbers, and special characters.
    * Use a value between 8 and 32 bytes.


<a id="6"></a>
## Modify a VPN Connection

* You can modify the name and description.


<a id="7"></a>
## Delete a VPN Connection

### Common
* You can delete the selected VPN connection.

### v1
* If there are VPN connections pending for deletion or creation, the tasks must be completed before any other VPN connections can be deleted.

### v2
* If there are VPN connections pending for deletion or creation, you can complete the task or delete another VPN connection after the deletion.