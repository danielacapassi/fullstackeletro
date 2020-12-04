import { Switch, Route} from  'react-router-dom';
import Pedidos from './Pages/Pedidos';
import Produtos from './Pages/Produtos';
import PaginaInicial from './Pages/PaginaInicial';
import Contatos from './Pages/Contatos';
import Lojas from './Pages/Lojas'

function Rotas(){
    return(
        <Switch>
           <Route exact path="/" component={PaginaInicial} />
           <Route exact path="/Produtos" component={Produtos} />
           <Route exact path="/Pedidos" component={Pedidos} />
           <Route exact path="/Contatos" component={Contatos} />
           <Route exact path="/Lojas" component={Lojas} />
          
        </Switch>
    )
}

export default Rotas;