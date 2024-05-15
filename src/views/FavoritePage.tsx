import { useAppStore } from "../stores/useAppStore"

export default function FavoritePage() {
 const favorites =  useAppStore((state) => state.favorites);
  return (
    <>
        <h1 className="">Favoritos</h1>
    </>
  )
}
