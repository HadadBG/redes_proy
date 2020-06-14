import os
def conf_subnets(template,subnet,netmask,router,subnet_ini,subnet_fin):
    configuracion=""
    for i in range(len(template)):
        configuracion+=template[i]
        if  i == 0:
            configuracion+=subnet
        elif i == 1 or i == 3:
            configuracion+=netmask
        elif i == 2:
            configuracion+=router
        elif i == 4:
            configuracion+=subnet_ini
        elif i == 5:
            configuracion+=subnet_fin
    return configuracion

def conf_hosts(template,ip,nombre,mac):
    configuracion=""
    for i in range(len(template)):
        configuracion+=template[i]
        if  i == 0:
            configuracion+=nombre
        elif i == 1 :
            configuracion+=mac
        elif i == 2:
            configuracion+=ip
    return configuracion


def conf_dhcp(json):
    dummy_json=json
    con_str='''
default-lease-time 3600;
max-lease-time 7200;

# The ddns-updates-style parameter controls whether or not the server will
# attempt to do a DNS update when a lease is confirmed. We default to the
# behavior of the version 2 packages ('none', since DHCP v2 didn't
# have support for DDNS.)
ddns-update-style none;
'''
    template_subnet='''
subnet ''',''' netmask ''',''' {
    option routers			''',''';
    option subnet-mask		''',''';
    option domain-name-servers	192.168.1.4,192.168.3.3;
    range ''','''	''',''';	
}
'''
    template_host='''

host ''',''' {
	hardware ethernet ''',''';
	fixed-address     ''',''';
}
'''
    for subnet in dummy_json["subnets"]:
        con_str+=conf_subnets(
            template=template_subnet,
            subnet=subnet,
            netmask=dummy_json["subnets"][subnet]["netmask"],
            router=dummy_json["subnets"][subnet]["router"],
            subnet_ini=dummy_json["subnets"][subnet]["subnet-ini"],
            subnet_fin=dummy_json["subnets"][subnet]["subnet-fin"]
        )
        
    for host in dummy_json["hosts"]:
       con_str+=conf_hosts(
           template=template_host,
           ip=host,
           nombre=dummy_json["hosts"][host]["nombre"],
           mac=dummy_json["hosts"][host]["MAC"]
           )
    op_fi=open('/etc/dhcp/dhcpd.conf','w')
    op_fi.write(con_str)
    op_fi.close()

  

    os.system('systemctl restart isc-dhcp-server')
