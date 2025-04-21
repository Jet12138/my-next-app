export default function middleware(req: any, res: any, next: any) {
  const { body } = req;
  console.log('Minddleware is runned');
}
