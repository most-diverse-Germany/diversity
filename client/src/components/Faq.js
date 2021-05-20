import React from 'react'
// import BannerScrolling from './BannerScrolling'

const colors = [
  {
    color: '#8386D1',
    backgroundColor: '#77F0D5',
  },
  {
    color: '#679364',
    backgroundColor: '#F7A559',
  },
  {
    color: '#F7A559',
    backgroundColor: '#DBED83',
  },
  {
    color: '#E77BA2',
    backgroundColor: '#FCE7CC',
  },
]


export default function Faq() {
  return (
    <section className="content tw-text-justify" style={{
      color: '#816DFB',
      backgroundColor: '#E0E2EE',
    }}>



  {/* <div className='tw-w-full'>
          <BannerScrolling
            text={'Why we do what we do? // How to interpret the ranking? // Ranking insights // Why does it matter // About us '}
            color={'#8386D1'}
            backgroundColor={'#77F0D5'}
          />
        </div> */}

        <div className="tw-w-1/2">
          <h1 className="tw-text-center">FAQ</h1>
        
         <h2 className="tw-m-2 tw-text-center">Why this ranking</h2>

        
            <p>
                      Rankings matter because they are powerful tools to change what we as a society value. What
            gets measured gets attention. Most strikingly, we create this ranking because a ranking of 100
            Most Diverse Companies in Germany does not exist yet. We change that.
          
            There are many studies & publications on the value of diversity: There are a lot of survey
            based studies about the importance of D&I (diversity & inclusion) initiatives and firms’
            challenges in implementing these: see example: “Charter der Vielfalt”, or BCG
          
            There are a few existing rankings: There are also a few Germany-centric rankings of
            gender diversity (example: BCG), LGBT+ diversity (example: Uhlala) of German
            companies, or diversity of DAX executives more broadly (example: Handelsblatt)
           
            But there is a gap: If you are a young student in Germany or abroad, and look for an
            answer to the simple question “who are the most culturally diverse companies in
            Germany?” there is no answer. We now close this gap
            </p>

            <h2 className="tw-m-2 tw-text-center">How to interpret the ranking?</h2>

              <p>          Advancing diversity is ultimately a human rights imperative. This cause is greatly supported by
              the fact diversity at work is smart as it often fosters innovation.
              Diversity has many facets: Gender, LGBTIQ+ orientation, nationality or cultural backgrounds are
              known dimensions on which to measure diversity, however imperfectly.
              In this ranking, we choose to capture one specific aspect of diversity: Cultural diversity. The 100
              Most Diverse Companies in Germany are thus not most diverse in all facets of diversity, but in
              terms of diversity of cultural backgrounds. It thus complements existing rankings on gender
              diversity or LGBTIQ- diversity in Germany.
              We rank companies based on three factors: 1) Cultural diversity of the entire company (not just
              C-level), 2) openness to unproven, entry level talent (less than ~5 years of experience) and 3)
              company growth (as an indicator for success).
              In summary, these are companies that “make diversity work”. They are diverse, they give
              opportunity to young, unproven talent, and they successfully grow. As a result, they make for
              ideal role models of diverse, innovative companies.
              </p>  

              <h2 className="tw-m-2 tw-text-center">Methodological details: How is the ranking calculated?</h2>
              <p>
                                  In the first installment of this ranking, we collect data on the largest 850 startup companies
                    Headquartered in Germany (source: Techcrunch). To make results comparable, we show the
                    best 25 performers in 4 company size classes. This way we do not directly compare a large
                    DAX-listed company like Delivery Hero with a nascent Series A-funded startup.
                    We manually collect data on these firms from two data sources: Indeed and Linkedin. Indeed
                    provides the largest comparable universe of jobs posted in Germany, whereas Linkedin is the
                    only available source of information not just on the Board Level of companies but the entire
                    company. From Indeed, we capture jobs posted within two 2-week intervals, one at End of
                    October 2020 and one at End of January 2021. From Linkedin we take for the same intervals
                    the total employees per company as published on the Linkedin Company pagers, as well as a
                    sample of employee names (n=192 per company or fewer if company smaller).
                    1) Cultural diversity: The measurement of cultural diversity for German firms is the most
                    challenging and novel aspect of this ranking. This is because data on diversity is not
                    universally available, neither within companies or in the public domain (see e.g.
                    DeutscheWelle or Fortune). To address this challenge, researchers at University
                    Departments in the US (example: Sood & Laohaprapanon, 2018, or Skiena/Ye, 2017)
                    and commercial players (e.g. Namsor, 2020) typically use Machine Learning Models to
                    create this data by probabilistically inferring cultural background based on names. The
                    common original dataset used for that inference are publicly available US census files.
                    We use the API provided by Sood & Laohaprapanon to get cultural diversity shares for
                    each company. No individual level data is stored in this process. To avoid any potential
                    measurement bias, we calculate 4 methodologically different cultural diversity scores for
                    each company and then use the average of the normalized results for the ranking.
                    This method is far from perfect given the multifaceted nature of diversity. For example,
                    we do not take into account gender, LGBT+ orientation or nationality and solely capture
                    to which extent a sample of up to 192 employees from a company belongs to one of
                    broadly defined 13 cultural groups (see Sood & Laohaprapanon, 2018). As discussed
                    this is by design. In addition, we have done a few robustness checks of our results: they
                    are robust to changes in the underlying calculation of the diversity scores and the
                    samples used for each firm). Any potential biases in the calculation of cultural shares per
                    firm are bound to be systematic and thus might change the level of diversity but not the
                    order across companies.
                    2) Active hiring: We measure the hiring activity of companies by counting the absolute
                    number of open job positions listed, and then taking the share of open positions that are
                    open to entry level job seekers, “junior and mid-level talent”. To assess that share of
                    jobs, we assess job positions for tenure level markers like “Junior” or “Entry” and any
                    explicit mention of years of work experience. We code any job requiring 5 years of
                    experience or less as “junior/mid-level” and calculate the % of these jobs as a share of
                    overall job positions posted for each firm. This measure ranks companies highest that

                    are willing to work with, train and develop young talents and thus act as “social and
                    professional elevators” for people entering the workforce.
                    3) Company Growth: We measure the % change in employees listed on Linkedin as a
                    proxy for the growth of a company. There are no other measures of growth or financial
                    success available. This figure is updated daily and provides an unbiased view on the
                    growth of companies to the extent that it is reflected in the company headcount. While
                    not perfect, any bias (e.g. in % of employees listing their employer on Linkedin) is bound
                    to be mostly systematic within our narrow sample of startup companies and thus likely to
                    not impact the ranking.

                    To create the published ranking, we normalize the scores for all companies across the 3
                    subdimensions and take an average. To celebrate frontrunners and avoid unduly punishing the
                    late adopters we choose to make public only the 100 best companies. Results for all companies
                    in our sample are available upon request only from the companies directly involved.

              </p>
              <h2 className="tw-m-2 tw-text-center">Does it matter for European politics & society?</h2>
                      
                      <p>
                                            Economic inequality, political polarization and climate change are the defining social challenges
                      of our time. The structures & teams that created these challenges will not be the ones that solve
                      them.
                      The perspective shift needed to do so comes from diverse teams. There is clear theoretical
                      (example: Hong/Page, 2004) models and empirical evidence (example: Alesina et al, 2016)
                      showing that diverse teams and countries grow faster because they are more innovative.
                      Diversity is thus a key to solving the defining challenges of our time. While there’s a lot to be
                      done from a policy making side, the success or failure of this ultimately depends also on
                      companies and us all. Our ranking provides a guide as to which companies are diverse, grow
                      successfully and give opportunities for young talents from all over the world to join their ranks.
                      </p>
                
                      <h2 className="tw-m-2 tw-text-center">The partners: Imagine & Codeshift</h2>

                      <p>
                                                Imagine Foundation e.V. and Codeshift partner in the design, creation and publication of this
                          ranking. We are both guided by one shared belief: Talent is universal, opportunity is not.
                          We believe that we all still live in a world that is fundamentally unfair. A world in which people’s
                          ability to choose where to live and who to work for depend too much on their country of birth,
                          their gender, their immediate family, and other markers of identity.
                          Imagine Foundation e.V. is a recognized charity in Germany which runs a digital coaching
                          program to inspire and train young talent from the Middle East (especially Syria, Pakistan and
                          Egypt) in finding a job in Germany. Founded 2 years ago and supported by Schöpflin
                          Foundation, Imagine is now a diverse team of 60+ volunteers from 15+ countries. Since then,
                          the team has helped more than 120 people find a new life and work in Europe with companies

                          like Delivery Hero, Douglas, or GetYourGuide. For more information contact Dr. Johann
                          Harnoss (Co-Founder & CEO) and Fellow at the Boston Consulting Group.
                          Codeshift UG was founded with the vision to enable young talents in Rwanda to work for
                          international clients and help companies in Europe build digital products. To achieve that
                          codeshift partners up with the best startups in Kigali to build handpicked and well-tested teams.
                          Most of the personal progress of software engineers depends on what teams they are working
                          in. By mentoring young software engineers and placing them in teams with experienced
                          colleagues, codeshift helps the talents to grow and work on an international level. The positive
                          social impact is part of the mission of codeshift and the daily rates paid to the teams in Rwanda
                          are well above average. The founders of Codeshift also started the Tech in Rwanda e.V. charity
                          and work together with the German Cooperation (GIZ) and Federal Ministry for Economic
                          Cooperation and Development (BMZ) to support education and capacity building initiatives.
                      </p>
         </div>

     

        
      
            
      

      
    </section>
  )
}
