#after kubernetes spins up you will need to run 2 commands to find your token for accessing the dashboard:


https://docs.giantswarm.io/guides/install-kubernetes-dashboard/

kubectl get secret | grep cluster-admin-dashboard-sa

kubectl describe secret cluster-admin-dashboard-sa-token-6xm8l
