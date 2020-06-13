import sys, os
sys.path.append('scripts')
from get_conf import get_conf
from flask import Flask, render_template, jsonify, send_from_directory

app = Flask(__name__, static_url_path='',template_folder='templates/views/')
###Routes
@app.route('/')
def index():
    return render_template("index.html")
@app.route('/home')
def home():
    return render_template("home.html")
@app.route('/routers')
def routers():
    return  render_template("routers.html")
@app.route('/dnsConf')
def dns_conf():
    return  render_template("dnsConf.html")
@app.route('/dhcpConf')
def dhcp_conf():
    return  render_template("dhcpConf.html")

###Scripts    
@app.route('/background_process_test')
def background_process_test():
        res=get_conf()
        return jsonify(resultado=res)

###Statics        
@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('static/js', path)

@app.route('/css/<path:path>')
def send_css(path):
    return send_from_directory('static/css', path)