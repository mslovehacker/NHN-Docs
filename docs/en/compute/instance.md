# Instance

NHN Cloud Instance provides virtual server compute resources.

## Instance Types

| Type | Use Case | Recommended Range |
|---|---|---|
| **c2 (Compute Optimized)** | General web servers, APIs, containers | 2~16 vCPU |
| **m2 (Memory Optimized)** | Databases, caches, analytics | 8~64GB RAM |
| **g2 (GPU Instance)** | AI/ML workloads, inference servers | NVIDIA V100 / A100 |

## Creating an Instance

1. In the NHN Cloud console, navigate to **Compute > Instance**.
2. Click the **Create Instance** button.
3. Select name, zone, type, OS image, network, security group, key pair.
4. After confirmation, the instance becomes available within 1–2 minutes.

## Security Recommendations

!!! warning "Production instance security"
    - Route external SSH access **through a Bastion Host**
    - Apply **least privilege** for Security Groups
    - Place instances **behind a Load Balancer**
    - Apply OS patches regularly
