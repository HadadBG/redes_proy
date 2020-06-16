var hostClicks = 0;
var subnetClicks = 0;

$(document).ready(function () {
  hostClicks = $(document).children("typeH").length;
  subnetClicks = $(document).children("typeS").length;

  $('.collapsible').collapsible({
    onOpenEnd: function (arg) {
      //alert (arg.value);
    }
  });

  // Delete subnet
  $("body").delegate(".remBtn", "click", function () {
    var parent_id = $(this).parent().parent();
    parent_id.remove()
  });

  //Add Host
  $(".addHBtn").on("click", function () {
    hostClicks++;
    var parent_id = $(this).parent().parent().parent();
    var num = hostClicks;
    //New li element
    var newLi = document.createElement("li")

    //Header
    var liDivHeader = document.createElement("div")
    $(liDivHeader).addClass("collapsible-header my-colapsible");

    //Right icon
    var iconCont = document.createElement("i");
    $(iconCont).addClass("material-icons");
    $(iconCont).text("settings_input_component");
    $(liDivHeader).append(iconCont);

    //Paragraph
    var par = document.createElement("p");
    $(par).attr("id", "host" + num);
    $(par).text("Host: vm" + num);
    $(liDivHeader).append(par);

    //"Remove" Button
    var remBtn = document.createElement("a");
    $(remBtn).addClass("waves-effect red btn-small remBtn");
    $(remBtn).attr("id", "typeH");
    var remBtnIcon = document.createElement("i");
    $(remBtnIcon).addClass("material-icons right");
    $(remBtnIcon).text("cancel");
    $(remBtn).append(remBtnIcon);
    $(liDivHeader).append(remBtn);

    //Body
    var liDivBody = document.createElement("div");
    $(liDivBody).addClass("collapsible-body");
    //Collection
    var collection = document.createElement("ul");
    $(collection).addClass("collection");
    $(liDivBody).append(collection);

    //Collectiion-item
    var collItem = document.createElement("li");
    $(collItem).addClass("collection-item");
    //Collection-div
    var collDiv = document.createElement("div");
    $(collDiv).addClass("my-collection");
    //InputField
    var inputField = document.createElement("div");
    $(inputField).addClass("input-field");
    //Input
    var input = document.createElement("input");
    $(input).attr({
      disabled: "",
      type: "text",
      value: "xx:xx:xx:xx:xx:xx",
      id: "mac" + num,
      class: "ip"
    })
    //Label
    var label = document.createElement("label");
    $(label).attr({
      for: "mac" + num,
      class: "active"
    })
    $(label).text("Dirección MAC:");
    //Button
    var editBtn = document.createElement("button");
    $(editBtn).addClass("secondary-content my-btn");
    //Button-icon
    var btnIcon = document.createElement("i");
    $(btnIcon).addClass("material-icons");
    $(btnIcon).text("create");
    $(editBtn).append(btnIcon);
    //mac
    $(inputField).append(input);
    $(inputField).append(label);
    $(collDiv).append(inputField);
    $(collDiv).append(editBtn);

    // //InputFieldR
    // var inputField = document.createElement("div");
    // $(inputField).addClass("input-field");
    // //InputR
    // var input = document.createElement("input");
    // $(input).attr({
    //   disabled: "",
    //   type: "text",
    //   value: "xxxx.xxxx.xxxx.xxxx",
    //   id: "hostRouter" + num,
    //   class: "ip"
    // })
    // //LabelR
    // var label = document.createElement("label");
    // $(label).attr({
    //   for: "hostRouter" + num,
    //   class: "active"
    // })
    // $(label).text("Router:");
    // //ButtonR
    // var editBtn = document.createElement("button");
    // $(editBtn).addClass("secondary-content my-btnR");
    // //Button-iconR
    // var btnIcon = document.createElement("i");
    // $(btnIcon).addClass("material-icons");
    // $(btnIcon).text("create");
    // $(editBtn).append(btnIcon);
    // //router
    // $(inputField).append(input);
    // $(inputField).append(label);
    // $(collDiv).append(inputField);
    // $(collDiv).append(editBtn);

    // $(collItem).append(collDiv);
    // $(collection).append(collItem);

    // //Collectiion-item
    // var collItem = document.createElement("li");
    // $(collItem).addClass("collection-item");
    // //Collection-div
    // var collDiv = document.createElement("div");
    // $(collDiv).addClass("my-collection");


    //InputField
    var inputField = document.createElement("div");
    $(inputField).addClass("input-field");
    //Input
    var input = document.createElement("input");
    $(input).attr({
      disabled: "",
      type: "text",
      value: "xxxx.xxxx.xxxx.xxxx",
      id: "ipFixed" + num,
      class: "ip"
    })
    //Label
    var label = document.createElement("label");
    $(label).attr({
      for: "ipFixed" + num,
      class: "active"
    })
    $(label).text("Dirección IP Fija:");
    //ButtonR
    var editBtn = document.createElement("button");
    $(editBtn).addClass("secondary-content my-btnR");
    //Button-icon
    var btnIcon = document.createElement("i");
    $(btnIcon).addClass("material-icons");
    $(btnIcon).text("create");
    $(editBtn).append(btnIcon);

    $(inputField).append(input);
    $(inputField).append(label);
    $(collDiv).append(inputField);
    $(collDiv).append(editBtn);

    // //InputFieldSN
    // var inputField = document.createElement("div");
    // $(inputField).addClass("input-field");
    // //InputSN
    // var input = document.createElement("input");
    // $(input).attr({
    //   disabled: "",
    //   type: "text",
    //   value: "xxxx.xxxx.xxxx.xxxx",
    //   id: "hostSNMask" + num,
    //   class: "ip"
    // })
    // //LabelSN
    // var label = document.createElement("label");
    // $(label).attr({
    //   for: "hostSNMask" + num,
    //   class: "active"
    // })
    // $(label).text("Máscara de Subred:");
    // //ButtonSN
    // var editBtn = document.createElement("button");
    // $(editBtn).addClass("secondary-content my-btnR");
    // //Button-iconSN
    // var btnIcon = document.createElement("i");
    // $(btnIcon).addClass("material-icons");
    // $(btnIcon).text("create");
    // $(editBtn).append(btnIcon);

    // $(inputField).append(input);
    // $(inputField).append(label);
    // $(collDiv).append(inputField);
    // $(collDiv).append(editBtn);

    $(collItem).append(collDiv);
    $(collection).append(collItem);


    $(newLi).append(liDivHeader);
    $(newLi).append(liDivBody);
    $(parent_id).append(newLi);

  })

  // Add subnet
  $('.addBtn').on('click', function () {
    subnetClicks++;
    var parent_id = $(this).parent().parent().parent();
    var num = subnetClicks;
    //New li element
    var newLi = document.createElement("li")

    //Header
    var liDivHeader = document.createElement("div")
    $(liDivHeader).addClass("collapsible-header my-colapsible");

    //Right icon
    var iconCont = document.createElement("i");
    $(iconCont).addClass("material-icons");
    $(iconCont).text("settings_input_component");
    $(liDivHeader).append(iconCont);

    //Paragraph
    var par = document.createElement("p");
    $(par).attr("id", "ipSR" + num);
    $(par).text("Subred: xxxx.xxxx.xxxx.xxxx");
    $(liDivHeader).append(par);

    //"Remove" Button
    var remBtn = document.createElement("a");
    $(remBtn).addClass("waves-effect red btn-small remBtn");
    $(remBtn).attr("id", "typeS");
    var remBtnIcon = document.createElement("i");
    $(remBtnIcon).addClass("material-icons right");
    $(remBtnIcon).text("cancel");
    $(remBtn).append(remBtnIcon);
    $(liDivHeader).append(remBtn);

    //Body
    var liDivBody = document.createElement("div");
    $(liDivBody).addClass("collapsible-body");
    //Collection
    var collection = document.createElement("ul");
    $(collection).addClass("collection");
    $(liDivBody).append(collection);

    //Collectiion-item
    var collItem = document.createElement("li");
    $(collItem).addClass("collection-item");
    //Collection-div
    var collDiv = document.createElement("div");
    $(collDiv).addClass("my-collection");
    //InputField
    var inputField = document.createElement("div");
    $(inputField).addClass("input-field");
    //Input
    var input = document.createElement("input");
    $(input).attr({
      disabled: "",
      type: "text",
      value: "xxxx.xxxx.xxxx.xxxx",
      id: "ip-start" + num,
      class: "ip"
    })
    //Label
    var label = document.createElement("label");
    $(label).attr({
      for: "ip-start" + num,
      class: "active"
    })
    $(label).text("Inicio del Rango:");
    //Button
    var editBtn = document.createElement("button");
    $(editBtn).addClass("secondary-content my-btn");
    //Button-icon
    var btnIcon = document.createElement("i");
    $(btnIcon).addClass("material-icons");
    $(btnIcon).text("create");
    $(editBtn).append(btnIcon);

    $(inputField).append(input);
    $(inputField).append(label);
    $(collDiv).append(inputField);
    $(collDiv).append(editBtn);

    //InputFieldR
    var inputField = document.createElement("div");
    $(inputField).addClass("input-field");
    //InputR
    var input = document.createElement("input");
    $(input).attr({
      disabled: "",
      type: "text",
      value: "xxxx.xxxx.xxxx.xxxx",
      id: "router" + num,
      class: "ip"
    })
    //LabelR
    var label = document.createElement("label");
    $(label).attr({
      for: "router" + num,
      class: "active"
    })
    $(label).text("Router:");
    //ButtonR
    var editBtn = document.createElement("button");
    $(editBtn).addClass("secondary-content my-btnR");
    //Button-iconR
    var btnIcon = document.createElement("i");
    $(btnIcon).addClass("material-icons");
    $(btnIcon).text("create");
    $(editBtn).append(btnIcon);

    $(inputField).append(input);
    $(inputField).append(label);
    $(collDiv).append(inputField);
    $(collDiv).append(editBtn);

    $(collItem).append(collDiv);
    $(collection).append(collItem);

    //Collectiion-item
    var collItem = document.createElement("li");
    $(collItem).addClass("collection-item");
    //Collection-div
    var collDiv = document.createElement("div");
    $(collDiv).addClass("my-collection");
    //InputField
    var inputField = document.createElement("div");
    $(inputField).addClass("input-field");
    //Input
    var input = document.createElement("input");
    $(input).attr({
      disabled: "",
      type: "text",
      value: "xxxx.xxxx.xxxx.xxxx",
      id: "ip-end" + num,
      class: "ip"
    })
    //Label
    var label = document.createElement("label");
    $(label).attr({
      for: "ip-end" + num,
      class: "active"
    })
    $(label).text("Fin del Rango:");
    //Button
    var editBtn = document.createElement("button");
    $(editBtn).addClass("secondary-content my-btn");
    //Button-icon
    var btnIcon = document.createElement("i");
    $(btnIcon).addClass("material-icons");
    $(btnIcon).text("create");
    $(editBtn).append(btnIcon);

    $(inputField).append(input);
    $(inputField).append(label);
    $(collDiv).append(inputField);
    $(collDiv).append(editBtn);

    //InputFieldSN
    var inputField = document.createElement("div");
    $(inputField).addClass("input-field");
    //InputSN
    var input = document.createElement("input");
    $(input).attr({
      disabled: "",
      type: "text",
      value: "xxxx.xxxx.xxxx.xxxx",
      id: "snMask" + num,
      class: "ip"
    })
    //LabelSN
    var label = document.createElement("label");
    $(label).attr({
      for: "snMask" + num,
      class: "active"
    })
    $(label).text("Máscara de Subred:");
    //ButtonSN
    var editBtn = document.createElement("button");
    $(editBtn).addClass("secondary-content my-btnR");
    //Button-iconSN
    var btnIcon = document.createElement("i");
    $(btnIcon).addClass("material-icons");
    $(btnIcon).text("create");
    $(editBtn).append(btnIcon);

    $(inputField).append(input);
    $(inputField).append(label);
    $(collDiv).append(inputField);
    $(collDiv).append(editBtn);

    $(collItem).append(collDiv);
    $(collection).append(collItem);


    $(newLi).append(liDivHeader);
    $(newLi).append(liDivBody);
    $(parent_id).append(newLi);

    var okBtn = document.createElement("a");
    $(okBtn).addClass("waves-effect waves-light btn okBtn");
    $(okBtn).attr("id", "okBtn" + num);
    $(okBtn).text("OK");
    $(collection).append(okBtn);
    //alert(num);
  })

  //Set collapsible header
  $("body").delegate(".okBtn", "click", function () {
    var thisId = String($(this).attr("id"));
    var num = thisId.slice(5);
    var ipIni = document.getElementById("ip-start" + num);
    var mask = document.getElementById("snMask" + num);

    var ipIniVal = String($(ipIni).val());
    var maskVal = String($(mask).val());
    var ipHeader = String("");

    switch (maskVal) {
      case "255.255.255.0":
        ipHeader = ipIniVal.slice(0, ipIniVal.lastIndexOf("."));
        ipHeader = ipHeader + (".0");
        break;
      case "255.255.0.0":
        ipHeader = ipIniVal.slice(0, ipIniVal.lastIndexOf("."));
        ipHeader = ipHeader.slice(0, ipHeader.lastIndexOf("."));
        ipHeader = ipHeader + (".0.0");
        break;
      case "255.0.0.0":
        ipHeader = ipIniVal.slice(0, ipIniVal.lastIndexOf("."));
        ipHeader = ipHeader.slice(0, ipHeader.lastIndexOf("."));
        ipHeader = ipHeader.slice(0, ipHeader.lastIndexOf("."));
        ipHeader = ipHeader + (".0.0.0");
        break;
      case "0.0.0.0":
        ipHeader = ipHeader + ("0.0.0.0");
        break;
      default:
        alert("Inserte una Máscara de Subred válida");
        return;
    }
    var header = document.getElementById("ipSR" + num);
    $(header).text("Subred: " + ipHeader);
  });

  //Edit ip range
  $("body").delegate(".my-btn", "click", function () {
    var parent_id = $(this).parent();
    var inputField = $(parent_id).children(".input-field");
    var input = $(inputField).children("input");
    $(input[0]).removeAttr("disabled");
  });

  $("body").delegate(".my-btnR", "click", function () {
    var parent_id = $(this).parent();
    var inputField = $(parent_id).children(".input-field");
    var input = $(inputField).children("input");
    $(input[1]).removeAttr("disabled");
  });


  //Confirm ip range
  $("body").delegate(".ip", "keypress", function (e) {
    if (e.keyCode == 13) {
      $(this).attr("disabled", "");
    }
  });
});

function getjson(){
  var json_env={};
  json_env["hosts"]={};
  json_env["subnets"]={};
  var kids=Object.values($("#collap").children());
  kids.pop()//Numero de elementos en el array
  kids.pop()//Next HTML
  kids.shift()//Elimina el agregar host y agragar subred
  kids.forEach(function(kid) {  
     var tipo, nombre
     [tipo, nombre] = $(kid).find("p").html().split(" ");
     if(tipo == "Host:"){
    
      //Obtencion de datos desde el Front
      const  host = Object.values($(kid).find("input"));
      const mac = $(host[0]).val() //--->MAC
      const ip = $(host[1]).val() //--->IP

      //Construccion del JSON
    json_env["hosts"][ip]={};
    json_env["hosts"][ip]["MAC"]     = mac;
    json_env["hosts"][ip]["nombre"]  = nombre;
      
     }
     else{//subred
        
        //Obtencion de datos desde el Front
        const  subred = Object.values($(kid).find("input"));
        const ran_ini = $(subred[0]).val();//-->Rango inicial
        const router  = $(subred[1]).val();//-->Router
        const ran_fin = $(subred[2]).val();//-->Rango Final
        const netmask = $(subred[3]).val();//-->Netmask
        //Construccion del JSON
        json_env["subnets"][nombre]={}
        json_env["subnets"][nombre]["netmask"]     = netmask;
        json_env["subnets"][nombre]["router"]      = router;
        json_env["subnets"][nombre]["subnet-ini"]  = ran_ini;
        json_env["subnets"][nombre]["subnet-fin"]  = ran_fin;
        
       
     }
     

  });
  return json_env
}
$(function () {
  $('#btn_sv_dhcp').bind('click', function () {
    
    var dummy_json=getjson();
   // alert(JSON.stringify(getjson()));
    //alert("Saludos")
     $.ajax({
      dataType: "json",
      url: "/set_dhcp",
      data: JSON.stringify(dummy_json),
      success: function (data) {
        alert("Configuración realizada correctamente");
      },
      processData: false,
      method: "POST"
    });
    return false;
  });
});
