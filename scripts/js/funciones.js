function msjErrorUser(){
    alert("Error de usuario");
}
function msjErrorPass(){
    alert("Error de contraseña");
}
function msjGuardar(){
    alert("Datos guardados");
}
function cargarDiv(div,url){
    $(div).load(url);
}

function registrarCliente(){
    var nombre=$("#nombre").val();
    var correo=$("#correo").val();
    var numero=$("#numero").val();
    var direccion=$("#direccion").val();
    $.post("registrarCliente.php",{"nombre":nombre,"direccion":direccion,"numero":numero,"correo":correo}, function(respuesta){
        alert(respuesta);
        $("#nombre").val("");
        $("#direccion").val("");
        $("#numero").val("");
        $("#correo").val("");
    });

}

function registrarVehiculo(){
    var matricula=$("#matricula").val();
    var modelo=$("#modelo").val();
    var color=$("#color").val();
    var puertas=$("#puertas").val();
    var tipo=$("#tipo").val();
    var id_cliente=$("#id_cliente").val();

    $.post("registrarVehiculo.php",{"matricula":matricula,"modelo":modelo,"color":color,"puertas":puertas,"tipo":tipo,"id_cliente":id_cliente}, function(respuesta){
        alert(respuesta);
        $("#matricula").val("");
        $("#modelo").val("");
        $("#color").val("");
        $("#puertas").val("");
        $("#tipo").val("");
        $("#id_cliente").val("");
        
    });

}

function registrarEmpleado(){
    var nombre=$("#nombre").val();
    var correo=$("#correo").val();
    var numero=$("#numero").val();
    var direccion=$("#direccion").val();
    var usuario=$("#usuario").val();
    var contrasena=$("#contrasena").val();
    $.post("registrarEmpleado.php",{"nombre":nombre,"direccion":direccion,"numero":numero,"correo":correo,"usuario":usuario,"contrasena":contrasena}, function(respuesta){
        alert(respuesta);
        $("#nombre").val("");
        $("#direccion").val("");
        $("#numero").val("");
        $("#correo").val("");
        $("#usuario").val("");
        $("#contrasena").val("");
    });

}
function registrarCajon(){
    var numero=$("#numero").val();
    var estatus=$("#estatus").val();
   
    $.post("registrarCajon.php",{"numero":numero,"estatus":estatus}, function(respuesta){
        alert(respuesta);
        $("#numero").val("");
        $("#estatus").val("");
        
    });

}

function registrarTarifa(){
    var tarifa=$("#tarifa").val();
    var monto=$("#monto").val();
   
    $.post("registrarTarifa.php",{"tarifa":tarifa,"monto":monto}, function(respuesta){
        alert(respuesta);
        $("#tarifa").val("");
        $("#monto").val("");
        
    });

}

function eliminarCajon(idcajon){
    $.post("eliminarCajon.php",{
        "id_cajon":idcajon
    },
        function(result){
            alert(result);
        }
    );
}

function eliminarCliente(idcliente){
    $.post("eliminarCliente.php",{
        "id_cliente":idcliente
    },
        function(result){
            alert(result);
        }
    );
}

function eliminarVehiculo(idvehiculo){
    $.post("eliminarVehiculo.php",{
        "id_vehiculo":idvehiculo
    },
        function(result){
            alert(result);
        }
    );
}

function eliminarEmpleado(idempleado){
    $.post("eliminarEmpleado.php",{
        "id_empleado":idempleado
    },
        function(result){
            alert(result);
        }
    );
}
function eliminarTarifa(idtarifa){
    $.post("eliminarTarifa.php",{
        "id_tarifa":idtarifa
    },
        function(result){
            alert(result);
        }
    );
}