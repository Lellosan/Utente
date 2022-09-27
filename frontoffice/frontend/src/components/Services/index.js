import React from 'react'
import{
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>
            Our Services
        </ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Micio micio</ServicesH2>
                <ServicesP>bauuu bauuuu</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Auuuuuuu</ServicesH2>
                <ServicesP>bauuu bauuuu</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Bang Bang!!</ServicesH2>
                <ServicesP>bauuu bauuuu</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services