import { IStatisticData } from '@/data/interfaces'
import { default as statisticsData } from '@/data/statisticsData.json'

const Card = ({ icon, heading, content }: {
  icon: string,
  heading: string,
  content: string
}) => (
  <article className='p-6 text-center relative bg-white rounded-lg mt-[44px]'>
    <div className="img-container w-[88px] h-[88px] rounded-[50%] bg-dark-violet flex items-center justify-center mx-auto absolute">
      <img src={icon} alt="icon" className="w-[40px] h-[40px]" />
    </div>
    <div className='grid gap-3 mt-[44px] mb-3'>
      <h3 className='text-h3-m text-very-dark-violet md:text-left'>{heading}</h3>
      <p className='text-base text-grayish-violet md:text-left'>{content}</p>
    </div>
  </article>
)
export const AdvancedStatisticsSection = () => {
  const cards = statisticsData.map((data: IStatisticData) => (
    <Card key={data.id} {...data} />
  ))
  return (
    <section className="adv-stats py-24 bg-light-gray">
      <div className="container mx-auto px-6">
        <h2 className="text-very-dark-violet text-h2-m md:text-h2-d text-center">Advanced Statistics</h2>
        <p className="text-center text-p-m md:text-p-d text-grayish-violet mt-3 md:mt-5">
          Track how your links are performing across the web with our advanced statistics dashboard.
        </p>
      </div>
      <div className='container mx-auto cards px-6 mt-20 md:mt-12 grid gap-12 relative'>
        <div className="bg-line bg-cyan h-full w-2 absolute"></div>
        {cards}
      </div>
    </section>
  )
}