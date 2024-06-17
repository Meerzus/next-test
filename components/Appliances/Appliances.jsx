export const Appliances = ({appliances}) => {

    return <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }}>
        {
            appliances && appliances.map(appliance => <div key={appliance.id} style={{
                border: '1px solid white',
                margin: '10px 0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '500px',
                height: '100px'
            }}>{appliance.appliance_type}</div>)
        }
    </div>
}