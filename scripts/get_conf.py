import telnetlib
import shutil
def get_conf():
    user="cisco\n"
    passwd="cisco123\n"
    host_dir="192.168.1.4\n"
    routers=[['r1','192.168.1.254'],['r2','192.168.5.253'],['r4','192.168.2.253']]
    return_cad=""
    for router in routers:
        #print("hola")
        print("Obteniendo configuracion del router "+router[0]+"...")
        tn=telnetlib.Telnet(router[1])
        tn.write(user.encode('ascii'))
        tn.write(passwd.encode('ascii'))
        tn.write("copy running-config tftp\n".encode('ascii'))
        tn.write(host_dir.encode('ascii'))
        tn.write((router[0]+"_config\n").encode('ascii'))
        tn.write("exit\n".encode('ascii'))
        shutil.copy("/var/lib/tftpboot/"+router[0]+"_config","./scripts/routers_conf/"+router[0]+"_config")
        #print(tn.read_all().decode('ascii'))
        return_cad+=" Configuracion del router "+router[0]+" guardada en /routers_conf/"+router[0]+"_config \n"
    return return_cad
