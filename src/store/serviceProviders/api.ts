import { serverClient } from '..'

export async function fetchServiceProviders() {
  return await serverClient.get('service_providers/')
}
