import MyLifecycleComponent from '@/components/MyLifecycleComponent';
import { shallowMount } from '@vue/test-utils';

describe('MyLifecycleComponent', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(MyLifecycleComponent, {
            methods: {
                mounted: MyLifecycleComponent.mounted
            }
        });
    });

    describe('mounted()', () => {
        it('should call initialize method', () => {
            const spy = jest.spyOn(wrapper.vm, 'initialize');

            wrapper.vm.mounted();

            expect(spy).toHaveBeenCalled();
        });
    });
});
