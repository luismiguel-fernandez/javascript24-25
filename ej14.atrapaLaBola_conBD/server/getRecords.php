<?php
if(isset($_GET['topn'])) {
 
    function queryRecords($limite,$conexion) {
        /*
        $sentencia = "SELECT instante FROM mensajes WHERE id > ".$_GET['ultimo'];
        $resultados = mysql_query($sentencia, $conexion) or die("Error en query: ".mysql_error());
        $salida = array();
        while ($fila = mysql_fetch_array($resultados)) {
           $salida[] = $fila['instante'];
        }
        return $salida;
        */
    }

    $servidor = 'localhost';
	$bd = 'atrapaLaBola';
	$user = 'root';
	$pw = '';
	$con = mysql_connect($servidor,$user,$pw);
	mysql_select_db($bd, $con);
	mysql_set_charset('utf8');
    
    echo json_encode( queryRecords($_GET['topn'],$con) );
} else {
	echo "No has pasado los parámetros correctos. Debes pasar 'topn'";
}
?>