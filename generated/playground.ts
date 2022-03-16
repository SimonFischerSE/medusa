import {
  components as storeComponents,
  operations as storeOperations,
  paths as storePaths,
} from "./store"
import {
  components as adminComponents,
  operations as adminOperations,
  paths as adminPaths,
} from "./admin"

type ProductVariant = adminComponents["schemas"]["product_variant"]

type CreateProductVariant =
  adminOperations["PostProductsProductVariants"]["requestBody"]["content"]["application/json"]

type CreateProductVariantResponse =
  adminOperations["PostProductsProductVariants"]["responses"]["200"]["content"]["application/json"]["product"]

type something =
  adminPaths["/auth"]["get"]["responses"]["200"]["content"]["application/json"]

const createProductVariant: CreateProductVariant = {
  material: "something",
  allow_backorder: false,
  title: "something",
  options: [
    {
      value: "100",
      option_id: "opt__",
    },
  ],
  prices: [
    {
      amount: 1000,
    },
  ],
}

const product: CreateProductVariantResponse = {}
