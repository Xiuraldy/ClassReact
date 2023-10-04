# MARKETPLACE!

Proyecto marketplace, en el se creara:
 - Pagina de regístrate `/sign-up`.
 - Pagina de login `/sign-in`.
 - Los usuarios deben tener un rol, este rol indicara el portal que usara dicho usuario.
 - Los portales son: `/admin`, `/seller` y `/buyer`
 - Ningún usuario puede estar en un portal sin haber iniciado una sesión, además no puede estar en un portal que no les corresponda
 - El admin puede listar las entidades y modificarlas de ser necesario. Por ejemplo, un admin puede cambiar la password de otro usuario si lo necesita.
 - Los sellers son quienes ofrecen sus productos a los buyers, este producto debe tener un control de inventario
 - Los sellers solo pueden ver sus productos
 - Los sellers solo pueden modificar sus productos
 - Los sellers pueden ver las ventas que han hecho
 - Los buyers pueden ver todos los productos
 - Los buyers pueden realizar compras de un solo seller

## INICIAR EL BACKEND MOCK

- `cd back`
- `npm install`
- `npm start`

## INICIAR EL FRONTEND MOCK

- `cd front`
- `npm install`
- `npm start`


**Nota:**  Con esta api tienes un crud para cualquier dato que necesites, además de un servicio de login y sign up

## Entidades

- **users**
  >{
     "id": 0,
     "username": "",
     "password": "",
     "role": ""
  }
  
**Nota:** El role debe ser seller, buyer o admin. Pueden agregar cualquier otro campo que requieran
- **products**
  >{
   "id": 0,
   "name": "",
   "price": 0,
   "user_id": 0
 }
 
- **sell_order**
  >{
    "id": 0,
    "seller_id": 0,
    "buyer_id": 0,
     "date": ""
  }
  
- **sell_order_products**
  >{
	  "id": 0,
	  "sell_order_id": 0,
	  "product_id": 0,
	  "quantity": 0,
	  "price": 0  
	 }
