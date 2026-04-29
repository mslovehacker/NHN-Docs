## Check Instance Status

Go to **Compute > Monitoring > Server Details** and add an instance to monitor.

Click **Add** for the server selected at the **Server Name**, and its details are added to the below table. You can also delete servers you don't want any more, by pressing **Delete**. Following information shows in the server details:    

- Server Name: Server Name


- IP: IP address
- vCPU: Usage Volume of CPU
- Memory: Usage Volume of Memory
- Disk Read: Disk Read Byte by Second
- Disk Write: Disk Write Byte by Second
- Network In: Network Receive Byte by Second
- Network Out: Network Transfer Byte by Second
- Status: Server Status
- Uptime: Server Operating Time  

Select **Graph** to view the graph of a server status.

![[그림 2 서버 상태 그래프]](http://static.toastoven.net/prod_infrastructure/monitoring/img_102.jpg)

The data cycle displayed on the graph is automatically adjusted to 1 minute/5 minutes/30 minutes/2 hours, depending on the search periods. You may also click **Delete** to delete graphs of the server you don't need any more.  

> [Caution]  
> No monitoring data can be saved more than a month; the period on a graph cannot exceed a month.

## Check Alarm Logs

To check the list of alarm logs, go to **Compute > Monitoring > Alarm Logs**.

Check the list of alarms sent exceeding the threshold as registered. To view alarm logs of a particular VM, enter a server name or IP address and click **Search**.

## Register Alarms

To register alarms, go to **Compute > Monitoring > Alarm Setting** and click **Add**. 

Add a server to register alarms for on **Add Alarm Setting** and set metrics and specify receivers.

### Select Server Name

Search and add a server to register alarms.

### Select Metrics

Set system resources and thresholds of instances  to receive alarms for. Metrics are supported as follows: CPU, usage volume of CPU, usage volume of memory, usage volume of a disk, usage volume of network and server status. Description of each metric and the type of threshold to enter are as follows:  

| Parameter   | Description                              |
| ----------- | ---------------------------------------- |
| CPU         | Usage volume of CPU: enter one between 0 and 100 (%). |
| Memory      | Usage volume of a memory: enter an absolute value in MB. |
| Disk Read   | Usage volume of a disk read: enter an absolute value in byte for each device associated with an instance. |
| Disk Write  | Usage volume of a disk write: enter an absolute value in byte for each device associated with an instance. |
| Network In  | Usage volume of received network: enter an absolute value in byte for each Ethernet interface associated with an instance. |
| Network Out | Usage volume of transferred network: enter an absolute value in byte for each Ethernet interface associated with an instance. |
| Server Down | Status of a server: considered normal when communication with an outside network is available. No need to enter a value for this metric. |

> [Caution]  
> To use the **Server Down** Metric, a monitoring agent needs to be installed at the instance, which must be connected to a network communicating with outside networks.

1. Select a server from the **Server Name** and click **Add**.
2. Click **+ Add alarms**.
3. Select a metric to configure in **Metric**.
4. Select conditions in **Threshold** and specify values.
5. Click **Edit** to set alarm receivers.
6. In **Receiver** dialog, add a project member.  

### Set Receivers

Select a project member to receive alarms and select a receiving method.

Enter email of a project member at **Receiver** and click **Add**.

![[그림 6 Receiver 설정]](http://static.toastoven.net/prod_infrastructure/monitoring/img_106.png)

## Modify and Delete Alarms

Go to **Compute > Monitoring > Alarm Setting** and modify or delete alarms.

To modify alarms, click an alarm setting to modify on the list. Modification is available only for an alarm, unlike registration. The rest of the process is the same with alarm registration.
Registered alarms may be activated or deactivated, depending on the needs: select alarms to active/deactivate and click **Enable/Disable**.
You may also delete alarms when they are not needed any longer, by pressing **Delete**.

## Install Monitoring Agents

Monitoring agent is required only when Server Down Metric is used.

### Download Agents

Download **Agent** files of the **Compute > Monitoring** on [TOAST Download](https://docs.toast.com/en/Download/).

```
[root@host-192-168-0-7 ~]# wget http://static.toastoven.net/toastcloud/sdk_download/monitor/tcc/agent-centos-0.0.2.tgz
--2014-09-17 11:35:31--  http://static.toastoven.net/toastcloud/sdk_download/monitor/tcc/agent-centos-0.0.2.tgz
Connecting to http://static.toastoven.net... connected.
HTTP request sent, awaiting response... 200 OK
Length: 168329 (164K) [application/x-gzip]
Saving to: “agent-centos-0.0.2.tgz”

100%[=======================================================>]
168,329     --.-K/s   in 0.005s

2014-09-17 11:35:31 (35.6 MB/s) - “agent-centos-0.0.2.tgz” saved [168329/168329]
```

### Install Agents

Must install a monitoring agent with the root certificate. To install, decompress downloaded files, and execute 'nstall.sh'.  

```
[root@host-192-168-0-7 ~]# tar -zxvf agent-centos-0.0.2.tgz
./agent/
./agent/ssl/
./agent/ssl/cert.pem
./agent/ssl/.svn/
./agent/ssl/.svn/entries
./agent/ssl/.svn/text-base/
./agent/ssl/.svn/text-base/key.pem.svn-base
./agent/ssl/.svn/text-base/cert.pem.svn-base
./agent/ssl/.svn/tmp/
./agent/ssl/.svn/tmp/text-base/
./agent/ssl/.svn/tmp/prop-base/
./agent/ssl/.svn/tmp/props/
./agent/ssl/.svn/prop-base/
./agent/ssl/.svn/props/
./agent/ssl/.svn/all-wcprops
./agent/ssl/key.pem
./agent/conf.d/
./agent/conf.d/client.json
./agent/conf.d/rabbitmq.json
./agent/jq
./agent/sensu.repo
./agent/install.sh
./agent/plugins/
./agent/plugins/vm_checks_update.rb
./agent/plugins/VERSION
[root@host-192-168-0-7 ~]# cd agent
[root@host-192-168-0-7 ~]# sh install.sh
```

### Check Agent Status

It works normally if the “service sensu-client status” commands results in “is running”.

```
[root@host-192-168-0-7 ~]# /etc/init.d/sensu-client status
sensu-client (pid 9223) is running...
```

If the status is not like the above, you can manually begin with the “service sensu-client start” command.

```
[root@host-192-168-0-7 ~]# /etc/init.d/sensu-client start
Starting sensu-client [ OK ]
```

### Caution
Monitoring agent uses sensu, which is an open-source project; therefore, if another sensu agent is already installed at a user instance, the TOAST Cloud monitoring agent cannot be applied.   
In addition, if there is any fabrication or deletion of files within /etc/sensu, normal operations may not be ensured.
