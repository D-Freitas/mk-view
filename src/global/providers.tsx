import { ProductsProvider } from "../providers/products"
import { SearchProvider } from "../providers/search"

const GlobalProvider: React.FC = ({ children }) => {
  return (
    <ProductsProvider>
      <SearchProvider>
        {children}
      </SearchProvider>
    </ProductsProvider>
  )
}

export default GlobalProvider
