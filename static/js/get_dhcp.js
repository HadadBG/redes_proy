
$(document).ready(function () {

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

    // Add subnet
    $('.addBtn').on('click', function () {
        var parent_id = $(this).parent().parent().parent();
        var ch = $(parent_id).children();
        var num = ch.length;
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
        $(par).text("Subred: xxxx.xxxx.xxxx.xxxx");
        $(liDivHeader).append(par);

        //"Remove" Button
        var remBtn = document.createElement("a");
        $(remBtn).addClass("waves-effect red btn-small remBtn");
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
        $(collItem).append(collDiv);
        $(collection).append(collItem);


        $(newLi).append(liDivHeader);
        $(newLi).append(liDivBody);
        $(parent_id).append(newLi);
        //alert(num);
    })

    //Edit ip range
    $("body").delegate(".my-btn", "click", function () {
        var parent_id = $(this).parent();
        var inputField = $(parent_id).children(".input-field");
        var input = $(inputField).children("input");
        $(input).removeAttr("disabled");
    });

    //Confirm ip range
    $("body").delegate(".ip", "keypress", function (e) {
        if (e.keyCode == 13) {
            $(this).attr("disabled", "");
        }
    });
});


$(function() {
    $('#btn_sv_dhcp').bind('click', function() {
        
        dummy_json={
            "subnets": {
              "192.168.1.0": {
                "netmask": "255.255.255.0",
                "router": "192.168.1.254",
                "subnet-ini": "192.168.1.10",
                "subnet-fin": "192.168.1.100"
              },
              "192.168.2.0": {
                "netmask": "255.255.255.0",
                "router": "192.168.2.254",
                "subnet-ini": "192.168.2.10",
                "subnet-fin": "192.168.2.100"
              }
            },
            "hosts": {
              "192.168.1.4": {
                "MAC": "8e:95:62:fa:e2:0d",
                "nombre": "Anfitrion"
              },
          "192.168.3.3": {
                "MAC": "08:00:27:51:ce:c1",
                "nombre": "dns_secundario"
              }
            }
          }
        //alert("Saludos")
        $.ajax({
            dataType: "json",
            url: "/set_dhcp",
            data: JSON.stringify(dummy_json),
            success: function(data){
                alert(JSON.stringify(data));
            },
            processData: false,
            method:"POST"
          });
      return false;
    });
  });
 