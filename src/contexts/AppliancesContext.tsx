import { createContext, PropsWithChildren, useContext, useState } from "react"

export type Appliance = {
    id: string
    name: string
    phoneNumber: string
    job: string
    description: string
}

export type AppliancesContextType = {
    appliances: Appliance[]
    addAppliance: (appliance: Appliance) => void
    removeAppliance: (id: string) => void
}

export const AppliancesContext = createContext<AppliancesContextType>({
    appliances: [],
    addAppliance: () => {},
    removeAppliance: () => {},
});

export const AppliancesProvider = ({children}: PropsWithChildren) => {
    const [appliances, setAppliances] = useState<Appliance[]>([])

    return <AppliancesContext.Provider value={{
        appliances,
        addAppliance: (appliance: Appliance) => {
            setAppliances([...appliances, appliance])
        },
        removeAppliance: (id: string) => {
            setAppliances(appliances.filter(a => a.id !== id))
        }
    }}>
        {children}
    </AppliancesContext.Provider>
}

export const useAppliances = () => {
    return useContext(AppliancesContext);
}