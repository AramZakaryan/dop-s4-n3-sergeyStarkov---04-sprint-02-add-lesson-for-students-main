type MyComponentProps<D> = {
  items: D[]
  defaultItem: D
}

const MyComponent = <T,>(props: MyComponentProps<T>) => {
  console.log(props)
  return <p>some content</p>
}

const App = () => {
  const users: User[] = [
    { name: 'Bilbo', age: 111 },
    { name: 'Frodo', age: 33 },
  ]

  return (
    <>
      <MyComponent items={['react', 'typescript']} defaultItem={'9'} />
      {/* in case of   string []   defauletItem --> string */}

      <MyComponent items={users} defaultItem={{ name: 'Bilbo', age: 111 }} />
    </>
  )
}

type User = {
  name: string
  age: number
}
