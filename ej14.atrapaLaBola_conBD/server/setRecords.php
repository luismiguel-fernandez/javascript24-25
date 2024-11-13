<?php
if(isset($_GET['nombre'],$_GET['puntos'])) {

    function queryRecords($nombre,$puntos,$conexion) {
        $consulta = "INSERT INTO records (nombre,puntos)
                     VALUES ('$nombre','$puntos')";
        $sen = $conexion->prepare($consulta);
        $sen->execute();
    }

    $server = "mysql:dbname=atrapaLaBola";
	$user = "root";
	$pw = "";
	$con = new PDO($server,$user,$pw,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\''));
    
    queryRecords($_GET['nombre'],$_GET['puntos'],$con);

} else {
	echo "No has pasado los parámetros correctos. Debes pasar 'nombre' y 'puntos'";
}
?>