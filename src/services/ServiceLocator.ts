// @ts-ignore
import {AxiosHttpService} from "./AxiosHttpService";

interface IServiceLocator {
    registerSingleton(instance: any): any
    getSingleton(instance: any): any
}

class GetIt implements IServiceLocator {
    private instances: {[key: string]: any } = {};

    public registerSingleton(instance: any): any {
        if (!this.instances[instance]) {
            // register instance
        }
        return this.instances[instance]
    }

    public getSingleton(instance: any): any {
        return this.instances[instance];
    }
}


function test() {
    const getIt: any = new GetIt();

    getIt.registerSingleton(new AxiosHttpService());
    getIt.get(new AxiosHttpService());
}
