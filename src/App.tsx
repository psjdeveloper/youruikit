import { Button, Input, Card, Badge } from "./index"

export default function App() {
  return (
    <div className="p-8 space-y-4">
      <Card>
        <h2 className="font-bold mb-2">youruikit</h2>
        <Input placeholder="Type something..." />
        <div className="mt-4 space-x-2">
          <Badge>Default</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
        </div>
        <Button className="mt-4">Submit</Button>
      </Card>
    </div>
  )
}
