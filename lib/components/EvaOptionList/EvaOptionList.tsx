import EvaListOptionComponent, { EvaListOptionProps } from "./EvaListOptionComponent"

export interface EvaOptionListProps {
    options: EvaListOptionProps[]
    width?: string
}

const EvaOptionList: React.FC<EvaOptionListProps> = ({options, width = 'w-full'}) => {
    return <div className={`flex flex-col gap-2 ${width}`}>
        {
            options.map((option, index) => <EvaListOptionComponent {...option} key={index} sciFiCode={index} />)
        }
    </div>
}

export default EvaOptionList