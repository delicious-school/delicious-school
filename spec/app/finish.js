export default function (done) {
  return (err) => {
    if (err) done.fail(err);
    else done();
  }
}
