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

    $server = "mysql:dbname=atrapaLaBola";
	$user = "root";
	$pw = "";
	$conexion = new PDO($server,$user,$pw,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\''));
    
    echo json_encode( queryRecords($_GET['topn'],$con) );
} else {
	echo "No has pasado los parámetros correctos. Debes pasar 'topn'";
}
?>