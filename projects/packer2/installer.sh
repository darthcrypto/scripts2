#!/bin/bash

yum install docker -y
yum install postgresql-server postgresql-contrib -y
sudo postgresql-setup initdb

systemctl enable docker
systemctl enable postgresql

systemctl start docker
systemctl start postgresql

yum install wget -y
wget http://www-eu.apache.org/dist//activemq/5.15.3/apache-activemq-5.15.3-bin.tar.gz  

tar -zxvf apache-activemq-*-bin.tar.gz -C /var

mv /var/apache-activemq-*/ /var/activemq/

cd /var/activemq

./bin/activemq start


sudo yum install java-1.8.0-openjdk -y
sudo sh -c "echo export JAVA_HOME=/usr/java/jdk1.8.0_161/jre >> /etc/environment"

#-figure out docker login
docker pull portainer/portainer
docker volume create portainer_data
docker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer


#install containers that portainer will have....

###vagrantkey
useradd vagrant
mkdir -p /home/vagrant/.ssh
chmod 0700 /home/vagrant/.ssh
wget --no-check-certificate \
	https://github.com/hashicorp/vagrant/blob/master/keys/vagrant.pub \
        -O /home/vagrant/.ssh/authorized_keys
chmod 0600 /home/vagrant/.ssh/authorized_keys
chown -R vagrant /home/vagrant/.ssh

