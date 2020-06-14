import os


def get_arch_conf(conf,dominio,comment):
    configuracion=comment
    for cadena in conf:
        configuracion+=dominio
        configuracion+=cadena
        
    return configuracion


named_conf=['''//
// Do any local configuration here
//

// Consider adding the 1918 zones here, if they are not used in your
// organization
//include "/etc/bind/zones.rfc1918";

zone "''',
'''" IN {
	type master;
	file "/etc/bind/db.proyectoadmin";
	allow-transfer{192.168.3.3;};
	also-notify{192.168.3.3;};
};

zone "1.168.192.in-addr.arpa" IN {
	type master;
	file "/etc/bind/db.192";
};''']

reverse_conf=[''';
; BIND data file for local loopback interface
;
$TTL	604800
@	IN	SOA	server.'''
,'''. root.server.''','''. (
			      2		; Serial
			 604800		; Refresh
			  86400		; Retry
			2419200		; Expire
			 604800 )	; Negative Cache TTL
;
@			IN	NS	server.''','''.
@			IN	PTR	''','''.
server			IN	A	192.168.1.4
host			IN	A	192.168.1.4
cliente			IN	A	192.168.2.5
4			IN	PTR	server.''','''.
5			IN	PTR	cliente.''','''.
''']
local_conf=['''
;
; BIND data file for local loopback interface
;
$TTL	604800
@	IN	SOA	server.''','''. root.server.''','''. (
			      2		; Serial
			 604800		; Refresh
			  86400		; Retry
			2419200		; Expire
			 604800 )	; Negative Cache TTL
;
@			IN	NS	server.''','''.
@			IN	A	192.168.1.4
server			IN	A	192.168.1.4
host			IN	A	192.168.1.4
cliente			IN	A	192.168.2.5
''']

def conf_dns(dominio):

    nuevo_dominio=dominio

    op_fi=open('/etc/bind/named.conf.local','w')
    cad=get_arch_conf(named_conf,nuevo_dominio,"//")
    op_fi.write(cad)
    op_fi.close()

    op_fi=open('/etc/bind/db.192','w')
    cad=get_arch_conf(reverse_conf,nuevo_dominio,";")
    op_fi.write(cad)
    op_fi.close()

    op_fi=open('/etc/bind/db.proyectoadmin','w')
    cad=get_arch_conf(local_conf,nuevo_dominio,";")
    op_fi.write(cad)
    op_fi.close()

    os.system('systemctl restart bind9')