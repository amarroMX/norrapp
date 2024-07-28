import Image from "react-bootstrap/Image";
import FeatureItem from "./FeatureItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons"
import { faVideo } from "@fortawesome/free-solid-svg-icons"
import { faFile } from "@fortawesome/free-solid-svg-icons"
import { faRobot } from "@fortawesome/free-solid-svg-icons"
import LoginSmallImage from '../assets/img/norra_logo_small.png'
import FlowerFireworkImage from '../assets/img/flower_firework.png'


function feature(){
    return(
        <div  className="d-flex flex-row flex-md-column align-items-center justify-content-around position-relative gap-5">
            <Image style={{ transform: 'rotate(180deg)' }} className="w-25 top-0 h-auto" src={FlowerFireworkImage} alt="illustraion flower"></Image>
            <Image className="w-75 h-auto" src={LoginSmallImage} ></Image>
            <div className="d-flex flex-row flex-md-column align-items-center gap-2 justify-content-around">
                <FeatureItem title="une masterclass unique" >
                    <FontAwesomeIcon icon={faClipboardCheck} size="xl" className="text-primary" />
                </FeatureItem>
                <FeatureItem title="webinaier individuel" >
                    <FontAwesomeIcon icon={faVideo} size="2xl" className="text-primary" />
                </FeatureItem>
                <FeatureItem title="exercises et resources illimité" >
                    <FontAwesomeIcon icon={faFile} size="2xl" className="text-primary" />
                </FeatureItem>
                <FeatureItem title="chatbot intégré" >
                    <FontAwesomeIcon icon={faRobot} size="2xl" className="text-primary" />
                </FeatureItem>
            </div>
            <Image  className="w-25 bottom-0 h-auto" src={FlowerFireworkImage} alt="illustraion flower"></Image>
        </div>
    )
}

export default feature;