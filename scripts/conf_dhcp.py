if __name__ == '__main__':

    arreglo=[["192.168.1.0","255.255.255.0","192.168.1.254","192.168.1.10","192.168.1.100"],
             ["192.168.2.0","255.255.255.0","192.168.2.254","192.168.2.10","192.168.2.100"],
             ["192.168.3.0","255.255.255.0","192.168.3.254","192.168.3.10","192.168.3.100"]
    ]

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
    hosts='''

host anfitrion {
	hardware ethernet 8e:95:62:fa:e2:0d;
	fixed-address     192.168.1.4;
}

host dns_secundario {
	hardware ethernet 08:00:27:51:ce:c1;
	fixed-address     192.168.3.3;
}
'''
    for subnet in arreglo:
        con_str+=template_subnet[0]
        con_str+=subnet[0]
        con_str+=template_subnet[1]
        con_str+=subnet[1]
        con_str+=template_subnet[2]
        con_str+=subnet[2]
        con_str+=template_subnet[3]
        con_str+=subnet[1]
        con_str+=template_subnet[4]
        con_str+=subnet[3]
        con_str+=template_subnet[5]
        con_str+=subnet[4]
        con_str+=template_subnet[6]
    con_str+=hosts
    op_fi=open('dhcpcd.conf','w')
    op_fi.write(con_str)
    op_fi.close()

  

   # os.system('systemctl restart bind9')