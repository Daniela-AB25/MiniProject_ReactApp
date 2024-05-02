const imgNotFound = 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'

const NotFound = () => {
  return (
    <div className="NotFound">
      <img src={imgNotFound} alt="Error Not Found" />
    </div>
  )
}

export default NotFound