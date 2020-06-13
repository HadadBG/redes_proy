import sys
sys.path.append('scripts')
from get_conf import get_conf
from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("views/index.html")

@app.route('/background_process_test')
def background_process_test():
        res=get_conf()
        
        return jsonify(resultado=res)
        
